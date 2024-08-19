import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const SpaceSkills = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Initialisation de la scène
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 10000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio); // Améliorer la qualité de rendu
        renderer.shadowMap.enabled = true; // Activer les ombres
        renderer.shadowMap.type = THREE.PCFShadowMap; // Type d'ombres plus doux

        mountRef.current.appendChild(renderer.domElement);

        // Contrôles de la caméra
        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.y = 40;
        camera.position.z = 145;

        // Limiter le zoom maximum et minimum
        controls.minDistance = 50;
        controls.maxDistance = 250;

        // Limiter le pas de zoom
        controls.enableZoom = true;
        controls.zoomSpeed = 0.05;

        // Activer l'inertie (damping)
        controls.enableDamping = true;
        controls.dampingFactor = 0.01; 

        // Lumière ambiante
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        // Lumière directionnelle pour les ombres
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 2, 0).normalize(); // Positionner la lumière pour éclairer la scène
        directionalLight.castShadow = true; // Activer les ombres
        directionalLight.shadow.mapSize.width = 2048;  // Augmenter la taille de la map d'ombre pour plus de détails
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;     // Ajuster la plage de la caméra d'ombre
        directionalLight.shadow.camera.far = 500;
        directionalLight.shadow.camera.left = -50;
        directionalLight.shadow.camera.right = 50;
        directionalLight.shadow.camera.top = 50;
        directionalLight.shadow.camera.bottom = -50;
        scene.add(directionalLight);


        // Liste des catégories et des compétences avec les chemins des logos
        const categories = {
            langages: [
                { name: 'C#', logo: 'skills_logo/c_sharp.svg' },
                { name: 'Javascript', logo: 'skills_logo/javascript.svg' },
                { name: 'Java', logo: 'skills_logo/java.svg' },
                { name: 'C++', logo: 'skills_logo/cpp.svg' },
                { name: 'Python', logo: 'skills_logo/python.svg' },
                { name: 'TypeScript', logo: 'skills_logo/typescript.svg' },
                { name: 'HTML', logo: 'skills_logo/html5.svg' },
                { name: 'CSS', logo: 'skills_logo/css3.svg' }
            ],
            frameworks: [
                { name: '.NET', logo: 'skills_logo/net.svg' },
                { name: 'Spring Boot', logo: 'skills_logo/springboot.svg' },
                { name: 'React', logo: 'skills_logo/react.svg' },
                { name: 'Next.js', logo: 'skills_logo/nextjs.svg' },
                { name: 'IONIC', logo: 'skills_logo/ionic.svg' },
                { name: 'Angular', logo: 'skills_logo/angular.svg' },
                { name: 'Node.js', logo: 'skills_logo/nodejs.svg' }
            ],
            outils: [
                { name: 'Git', logo: 'skills_logo/git.svg' },
                { name: 'MySQL', logo: 'skills_logo/mysql.svg' },
                { name: 'Postman', logo: 'skills_logo/postman.svg' },
                { name: 'PostgreSQL', logo: 'skills_logo/postgresql.svg' },
                { name: 'MongoDB', logo: 'skills_logo/mongodb.svg' },
                { name: 'Visual Studio', logo: 'skills_logo/vs.svg' },
                { name: 'Docker', logo: 'skills_logo/docker.svg' }
            ],
            methodologie: [
                { name: 'Architecture Rest', logo: 'skills_logo/restapi.png' },
                { name: 'Méthode agile', logo: 'skills_logo/agile.png' },
                { name: 'MVVM', logo: 'skills_logo/mvvm.png' },
                { name: 'MVC', logo: 'skills_logo/mvc.png' }
            ],
            softSkills: [
                { name: 'Persévérance', logo: 'skills_logo/perseverance.png' },
                { name: 'Esprit d’équipe', logo: 'skills_logo/teamwork.png' },
                { name: 'Adaptabilité', logo: 'skills_logo/adaptabilite.png' },
                { name: 'Résolution de problèmes', logo: 'skills_logo/resolution.png' },
                { name: 'Pensée critique', logo: 'skills_logo/critique.png' },
                { name: 'Autonomie', logo: 'skills_logo/autonomie.png' },
                { name: 'Curiosité', logo: 'skills_logo/curiosite.png' }
            ],
            langues: [
                { name: 'Français (langue natale)', logo: 'skills_logo/francais.svg' },
                { name: 'Anglais (B2)', logo: 'skills_logo/english.png' }
            ]
        };

        // Charger les textures pour le shader du soleil
        const textureLoader = new THREE.TextureLoader();
        const cloudTexture = textureLoader.load('textures/cloud.png');
        const lavaTexture = textureLoader.load('textures/lava.jpg');
        cloudTexture.wrapS = cloudTexture.wrapT = THREE.RepeatWrapping;
        lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;

        // Uniformes pour le shader
        const uniforms = {
            'time': { value: 1.0 },
            'uvScale': { value: new THREE.Vector2(1.0, 1.0) },
            'texture1': { value: cloudTexture },
            'texture2': { value: lavaTexture }
        };

        // Shader material pour le soleil
        const sunMaterial = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: `
                uniform vec2 uvScale;
                varying vec2 vUv;
        
                void main() {
                    vUv = uvScale * uv;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform sampler2D texture1;
                uniform sampler2D texture2;
                varying vec2 vUv;
        
                void main(void) {
                    vec2 position = -1.0 + 2.0 * vUv;
                    vec4 noise = texture2D(texture1, vUv);
                    vec2 T1 = vUv + vec2(1.5, -1.5) * time * 0.02;
                    vec2 T2 = vUv + vec2(-0.5, 2.0) * time * 0.01;
                    T1.x += noise.x * 2.0;
                    T1.y += noise.y * 2.0;
                    T2.x -= noise.y * 0.2;
                    T2.y += noise.z * 0.2;
                    float p = texture2D(texture1, T1 * 2.0).a;
                    vec4 color = texture2D(texture2, T2 * 2.0);
                    vec4 temp = color * (vec4(p, p, p, p) * 2.0) + (color * color - 0.1);
                    if (temp.r > 1.0) { temp.bg += clamp(temp.r - 2.0, 0.0, 100.0); }
                    if (temp.g > 1.0) { temp.rb += temp.g - 1.0; }
                    if (temp.b > 1.0) { temp.rg += temp.b - 1.0; }
                    gl_FragColor = temp;
                }
            `
        });

        // Créer un soleil réaliste avec le shader
        const sunGeometry = new THREE.SphereGeometry(20, 64, 64);
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.castShadow = true; // Le soleil émet des ombres
        scene.add(sun);
        
        // Créer les planètes et les logos
        const planetDistance = 90;

        const createTextTexture = (text) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const size = 512; 
            canvas.width = size;
            canvas.height = size;
            context.clearRect(0, 0, size, size);
            context.fillStyle = 'rgba(0, 0, 0, 0)';
            context.fillRect(0, 0, size, size);
            context.font = 'bold 65px Times New Roman';
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, size / 2, size / 2);
            return new THREE.CanvasTexture(canvas);
        };

        const textureLoader2 = new THREE.TextureLoader();

        // ajouter un fond d'étoiles
        const starGeometry = new THREE.SphereGeometry(5000, 16, 16);
        const starMaterial = new THREE.MeshBasicMaterial({
            map: textureLoader2.load('textures/stars.jpg'),
            side: THREE.BackSide
        });
        const starField = new THREE.Mesh(starGeometry, starMaterial);
        scene.add(starField);

        // Définir les textures pour chaque catégorie
        const planetTextures = {
            langages: textureLoader2.load('textures/jupiter.jpg'),
            frameworks: textureLoader2.load('textures/planet1.jpg'),
            outils: textureLoader2.load('textures/planet3.jpg'),
            methodologie: textureLoader2.load('textures/neptune.jpg'),
            softSkills: textureLoader2.load('textures/planet5.jpg'),
            langues: textureLoader2.load('textures/terre.jpg')
        };

        Object.keys(categories).forEach((category, index) => {
            // Calculer la taille de la planète en fonction du nombre de compétences
            const numSkills = categories[category].length;
            const planetSize = 4 + numSkills;  // Taille de base de 5, ajustez ce chiffre si nécessaire
        
            // Créer une planète pour chaque catégorie avec la texture correspondante
            const planetGeometry = new THREE.SphereGeometry(planetSize, 64, 64);
            const planetMaterial = new THREE.MeshPhysicalMaterial({
                map: planetTextures[category],
                roughness: 0.7,
                metalness: 0.3
            });
            const planet = new THREE.Mesh(planetGeometry, planetMaterial);
            planet.castShadow = true; // La planète émet des ombres
            planet.receiveShadow = true; // La planète reçoit des ombres
        
            // Créer un groupe pour la planète et ses logos
            const planetGroup = new THREE.Group();
            planetGroup.add(planet);
        
            // Positionner la planète
            const angle = (Math.PI * 2 * index) / Object.keys(categories).length;
            planetGroup.position.set(planetDistance * Math.cos(angle), 0, planetDistance * Math.sin(angle));
            scene.add(planetGroup);
        
            // Créer un sprite pour le texte de la catégorie
            const textTexture = createTextTexture(category.toUpperCase());
            const spriteMaterial = new THREE.SpriteMaterial({ map: textTexture });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.set(0, planetSize + 2, 0);  // Ajuster la position du texte en fonction de la taille de la planète
            sprite.scale.set(10, 10, 1);
            planetGroup.add(sprite);
        
            // Charger et positionner les logos pour chaque compétence
            categories[category].forEach((skill, skillIndex) => {
                textureLoader2.load(skill.logo, (texture) => {
                    const logoMaterial = new THREE.SpriteMaterial({ map: texture });
                    const logo = new THREE.Sprite(logoMaterial);
        
                    // Obtenir les dimensions du logo
                    const logoWidth = texture.image.width;
                    const logoHeight = texture.image.height;
        
                    // Calculer l'échelle pour uniformiser la taille
                    const maxDimension = Math.max(logoWidth, logoHeight);
                    const scale = 8 / maxDimension;  // Taille uniformisée, ajustez la valeur de 6 si nécessaire
        
                    // Positionner le logo autour de la planète
                    const moonAngle = (Math.PI * 2 * skillIndex) / categories[category].length;
                    logo.position.set(
                        (planetSize + 8) * Math.cos(moonAngle),  // Ajuster la position en fonction de la taille de la planète
                        0,
                        (planetSize + 8) * Math.sin(moonAngle)   // Ajuster la position en fonction de la taille de la planète
                    );
        
                    // Ajuster l'échelle du logo en fonction de la dimension la plus grande
                    logo.scale.set(logoWidth * scale, logoHeight * scale, 1);
        
                    planetGroup.add(logo);
        
                    // Ajouter des informations de compétence
                    logo.userData = { skill: skill.name };
                });
            });
        });
        

        // Raycaster pour la détection des clics
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const documentationUrls = {
            'C#': 'https://docs.microsoft.com/en-us/dotnet/csharp/',
            'Javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            'Java': 'https://docs.oracle.com/en/java/',
            'C++': 'https://en.cppreference.com/w/',
            'Python': 'https://docs.python.org/3/',
            'TypeScript': 'https://www.typescriptlang.org/docs/',
            'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            '.NET': 'https://docs.microsoft.com/en-us/dotnet/',
            'Spring Boot': 'https://spring.io/projects/spring-boot',
            'React': 'https://reactjs.org/docs/getting-started.html',
            'Next.js': 'https://nextjs.org/docs',
            'IONIC': 'https://ionicframework.com/docs',
            'Angular': 'https://angular.io/docs',
            'Node.js': 'https://nodejs.org/en/docs/',
            'Git': 'https://git-scm.com/doc',
            'MySQL': 'https://dev.mysql.com/doc/',
            'Postman': 'https://learning.postman.com/docs/',
            'PostgreSQL': 'https://www.postgresql.org/docs/',
            'MongoDB': 'https://www.mongodb.com/docs/',
            'Visual Studio': 'https://docs.microsoft.com/en-us/visualstudio/',
            'Docker': 'https://docs.docker.com/',
            'Architecture Rest': 'https://ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf',
            'Méthode agile': 'https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-French.pdf',
            'MVVM': 'https://learn.microsoft.com/fr-fr/windows/uwp/data-binding/data-binding-and-mvvm',
            'MVC': 'https://openclassrooms.com/fr/courses/4670706-adoptez-une-architecture-mvc-en-php/7847928-decouvrez-comment-fonctionne-une-architecture-mvc',
            'Persévérance': '', // Pas de documentation spécifique
            'Esprit d’équipe': '', // Pas de documentation spécifique
            'Adaptabilité': '', // Pas de documentation spécifique
            'Résolution de problèmes': '', // Pas de documentation spécifique
            'Pensée critique': '', // Pas de documentation spécifique
            'Autonomie': '', // Pas de documentation spécifique
            'Curiosité': '', // Pas de documentation spécifique
            'Français (langue natale)': '', // Pas de documentation spécifique
            'Anglais (B2)': '' // Pas de documentation spécifique
        };                

        const onMouseClick = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);
        
            if (intersects.length > 0) {
                const clickedObject = intersects[0].object;
        
                if (clickedObject.userData.skill) {
                    const skillName = clickedObject.userData.skill;
                    const url = documentationUrls[skillName];
                    
                    if (url) {
                        window.open(url, '_blank');
                    } else {
                        alert(`Pas de documentation disponible pour : ${skillName}`);
                    }
                }
            }
        };        

        window.addEventListener('click', onMouseClick);

        // Post-processing
        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);

        // Créez un MaskPass pour le soleil
        const maskPass = new MaskPass(scene, camera);
        maskPass.clear = false; // Ne pas effacer le canvas avant d'appliquer le mask
        maskPass.renderToScreen = false; // Rendre uniquement dans le RenderTarget

        // Créez un ClearMaskPass pour retirer le masque
        const clearMaskPass = new ClearMaskPass();

        // Bloom effect
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.35, // strength
            0.0, // radius
            1.0 // threshold
        );

        // Ajoutez les passes à l'EffectComposer
        composer.addPass(renderPass);
        composer.addPass(maskPass);
        composer.addPass(bloomPass);
        composer.addPass(clearMaskPass);
        composer.addPass(new OutputPass());

        // Fonction d'animation
        const animate = () => {
            requestAnimationFrame(animate);
            uniforms['time'].value += 0.02;
            sun.rotation.y -= 0.001;
            scene.rotation.y += 0.0002;

            scene.children.forEach(child => {
                if (child instanceof THREE.Group) {
                    child.rotation.y -= 0.001;
                }
            });

            controls.update();
            composer.render();
        };

        animate();

        // Ajuster la taille du renderer et de la caméra lors du redimensionnement de la fenêtre
        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            composer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Appeler une fois pour initialiser

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('click', onMouseClick);
        };
    }, []);

    return <div ref={mountRef} className="three-container threescene" />;
};

export default SpaceSkills;
