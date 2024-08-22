import { apiLimiter } from '../../middleware/rateLimit';

export default async function handler(req, res) {
    apiLimiter(req, res, async () => {
        const { repo } = req.query;
        const token = process.env.GITHUB_TOKEN;

        if (!token) {
            return res.status(500).json({ error: 'GitHub token is not set' });
        }

        try {
            const response = await fetch(`https://api.github.com/repos/LoicSERRE/${repo}`, {
                headers: {
                    'Authorization': `token ${token}`
                }
            });

            if (!response.ok) {
                return res.status(response.status).json({ error: 'Failed to fetch GitHub stars' });
            }

            const data = await response.json();
            const stars = parseInt(data.stargazers_count, 10);
            res.status(200).json({ stars });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
