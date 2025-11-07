import type {Content} from "$components/ArticleRenderer/type"
import {El} from "$components/ArticleRenderer/type"

export const load = () => {
    type PageData = {
        title: string,
        thumbnail: string,
        content: Array<Content>
    }

    const pageData: PageData = {
        title: 'Как я сделал свой сайт',
        thumbnail: '/post_preview.png',
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