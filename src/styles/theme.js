const mq = {
    l: 1900,
    m: 1410,
    s: 1100,
    xs: 768,
    xxs: 450,
}

export { mq }

const theme = {
    color: {
        white: "#fff",
        blue_400: "#4460F7",
        blue_700: "#2140E8",
        orange: "#F9A52B",
        gray_200: "#F0F1F5",
        gray_300: "#E0E2EA",
        gray_400: "#B9BDCF",
        gray_700: "#9194A5",
        gray_900: "#1A1B1D"

    },
    mq: {
        l: `@media(max-width: ${mq.l}px)`,
        m: `@media(max-width: ${mq.m}px)`,
        s: `@media(max-width: ${mq.s}px)`,
        xs: `@media(max-width: ${mq.xs}px)`,
        xxs: `@media(max-width: ${mq.xxs}px)`,
    },
}

export default theme