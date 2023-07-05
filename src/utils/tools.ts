export const containsHtml = (str: string) => {
    const htmlRegex = /<[^>]*>/g
    return htmlRegex.test(str)
  }