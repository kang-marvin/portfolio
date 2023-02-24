const helpers = {
  heavyText: "text-neutral-600 dark:text-neutral-200",
  lightText: "text-neutral-800 dark:text-neutral-50",
}

const colorClasses = {
  textColor: "text-orange-400",
  backgroundColor: "bg-black",
  linkColor: "text-blue-400",
  infoParagraph: `
    text-base ${helpers.heavyText}
  `,
  outline: `
    outline-blue-400/50
  `
}

const containerClasses = {
  div: "flex justify-center w-screen min-h-[90%] items-center",
  main: "w-5/6 h-[98%] rounded-lg min-w-[10rem] border-orange-50"
}

const linkClasses = {
  button: `rounded px-4 p-2 text-xs
    font-medium uppercase leading-normal
    text-primary bg-neutral-100
    hover:bg-neutral-300 min-w-[7rem]
  `,
  a: `
    outline outline-offset-2
    ${colorClasses.outline}
    ${colorClasses.linkColor}
  `
}

const cardClasses = {
  card: `
    flex flex-col w-4/5 rounded-lg
    text-center shadow-lg
    dark:bg-neutral-700
    m-4 p-4
  `,
  header: `
    mb-2 text-xl font-medium ${helpers.lightText}
  `,
  label: `
    rounded-xl border bg-gray-600
    px-[.8rem] py-[.5rem] leading-none
  `,
  button: `
    min-w-[8rem] max-w-[30rem] w-full
    rounded border-2 border-primary px-2 py-2
    text-xs font-medium uppercase leading-normal
    text-primary hover:border-primary-600
    hover:bg-neutral-500 hover:bg-opacity-10
    hover:text-primary-600
  `
}

const stepClasses = {
  list: `
    relative
    after:absolute after:left-[3rem]
    after:top-[4.5rem]
    after:h-[calc(100%-4.5rem)]
    after:w-px
    after:content-['']
    dark:after:bg-neutral-600
  `,

  header: `
    flex items-center uppercase
    p-6 after:content-['']
  `,

  icon: `
    mr-2 flex h-[3rem] w-[3rem]
    items-center justify-center rounded-full
    bg-orange-600 text-md font-medium text-black
  `,

  date: "dark:text-neutral-300",
  description: "pr-6 pb-6 pl-[4rem]"
}

export { colorClasses, containerClasses, linkClasses, cardClasses, stepClasses }