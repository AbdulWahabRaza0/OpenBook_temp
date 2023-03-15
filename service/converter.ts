import TurndownService from "turndown";
export function Converter(html: any) {
  const turndownService = new TurndownService();

  const markdown = turndownService.turndown(html);
  return markdown;
  //   console.log(markdown);
}
