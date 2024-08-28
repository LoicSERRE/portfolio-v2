import { apiLimiter } from '../../middleware/rateLimit';

export default async function handler(req, res) {
    apiLimiter(req, res, async () => {
        const { repos } = req.query; // Repos est un string de dépôts séparés par des virgules
        const token = process.env.GITHUB_TOKEN;

        if (!token) {
            return res.status(500).json({ error: 'GitHub token is not set' });
        }

        if (!repos) {
            return res.status(400).json({ error: 'No repositories provided' });
        }

        const repoList = repos.split(','); // Convertit la chaîne de caractères en tableau

        try {
            const fetchPromises = repoList.map(repo => {
                return fetch(`https://api.github.com/repos/LoicSERRE/${repo}`, {
                    headers: {
                        'Authorization': `token ${token}`
                    }
                });
            });

            const responses = await Promise.all(fetchPromises);

            const results = await Promise.all(responses.map(async response => {
                if (!response.ok) {
                    return { error: `Failed to fetch GitHub stars for ${response.url}` };
                }
                const data = await response.json();
                return { [data.name]: parseInt(data.stargazers_count, 10) };
            }));

            const starsData = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
            res.status(200).json(starsData);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
