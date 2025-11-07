import type {Content} from "$components/ArticleRenderer/type"
import {El} from "$components/ArticleRenderer/type"

export const load = () => {
    type PageData = {
        title: string,
        thumbnail: string,
        excerpt: string,
        published_at: Date,
        content: Array<Content>
    }

    const pageData: PageData = {
        title: 'Как я сделал свой сайт',
        thumbnail: '/post_preview.png',
        published_at: new Date("2025-11-07T11:05:00Z"),
        excerpt: 'Это будет небольшой отрывок от поста как я сделал свой сайт',
        content: [
            {
                el: El.Paragraph,
                children: [
                    {
                        el: El.Text,
                        content: 'Lorem ipsum dolor ',
                    },
                    {
                        el: El.Link,
                        href: '/',
                        content: 'Home page link',
                    },
                    {
                        el: El.Text,
                        content: ' sit amet, consectetur adipisicing elit. Nisi, pariatur?',
                    },
                ]
            },
        ]
    }

    return pageData
}