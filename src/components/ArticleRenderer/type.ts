export enum El {
    Text,
    Link,
    Paragraph
}

export type Content = {
    el: El.Paragraph,
    content?: string,
    children?: Content[]
} | {
    el: El.Text,
    content: string
} | {
    el: El.Link,
    content: string,
    href: string
}