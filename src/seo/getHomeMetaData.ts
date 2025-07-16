import { Metadata } from 'next';

export async function getHomeMetadata(): Promise<Metadata> {
    try {
        const res = await fetch('https://api.teachnow.ai/seo/home', { next: { revalidate: 60 }, });

        if (!res.ok) throw new Error('Failed to fetch metadata');

        const data = await res.json();

        return {
            metadataBase: new URL('https://teachnow-frontend.vercel.app'),
            title: {
                default: data.title || 'Teachnow',
                template: `%s | ${data.siteName || 'Teachnow'}`,
            },
            description:
                data.description ||
                'Explore powerful AI tools, insightful articles, and resources to grow your productivity and creativity.',
            keywords: data.keywords || [
                'AI tools',
                'Next.js 15',
                'React',
                'Tech Blog',
                'Machine Learning',
            ],
            authors: data.authors || [
                {
                    name: 'Sourav Sharma',
                    url: 'https://teachnow-frontend.vercel.app',
                },
            ],
            creator: data.creator || 'Sourav Sharma',
            publisher: data.publisher || 'Teachnow Media',
            robots: {
                index: true,
                follow: true,
            },
            alternates: {
                canonical: 'https://teachnow-frontend.vercel.app/',
            },
            openGraph: {
                title: data.ogTitle || data.title || 'Teachnow',
                description: data.ogDescription || data.description,
                url: 'https://teachnow-frontend.vercel.app/',
                siteName: data.siteName || 'Teachnow',
                images: [
                    {
                        url:
                            data.ogImage ||
                            'https://teachnow-frontend.vercel.app/default-og.jpg',
                        width: 1200,
                        height: 630,
                        alt: 'Teachnow Open Graph Image',
                    },
                ],
                locale: 'en_US',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: data.twitterTitle || data.title || 'Teachnow',
                description: data.twitterDescription || data.description,
                creator: '@yourTwitterHandle', // Replace with your handle
                images: [
                    data.twitterImage ||
                    'https://teachnow-frontend.vercel.app/default-og.jpg',
                ],
            },
        };
    } catch (error) {
        console.log(error);
        return {
            metadataBase: new URL('https://teachnow-frontend.vercel.app'),
            title: {
                default: 'Teachnow',
                template: '%s | Teachnow',
            },
            description:
                'Explore powerful AI tools, insightful articles, and resources to grow your productivity and creativity.',
            keywords: [
                'AI tools',
                'Next.js 15',
                'React',
                'Tech Blog',
                'Machine Learning',
            ],
            authors: [
                {
                    name: 'Sourav Sharma',
                    url: 'https://teachnow-frontend.vercel.app',
                },
            ],
            creator: 'Sourav Sharma',
            publisher: 'Teachnow Media',
            robots: {
                index: true,
                follow: true,
            },
            alternates: {
                canonical: 'https://teachnow-frontend.vercel.app/',
            },
            openGraph: {
                title: 'Teachnow',
                description:
                    'Explore powerful AI tools, insightful articles, and resources to grow your productivity and creativity.',
                url: 'https://teachnow-frontend.vercel.app/',
                siteName: 'Teachnow',
                images: [
                    {
                        url: 'https://teachnow-frontend.vercel.app/default-og.jpg',
                        width: 1200,
                        height: 630,
                        alt: 'Teachnow Open Graph Image',
                    },
                ],
                locale: 'en_US',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Teachnow',
                description:
                    'Explore powerful AI tools, insightful articles, and resources to grow your productivity and creativity.',
                creator: '@yourTwitterHandle',
                images: [
                    'https://teachnow-frontend.vercel.app/default-og.jpg',
                ],
            },
        };
    }
}