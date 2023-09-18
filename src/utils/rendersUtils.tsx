import { footerLinks, footerLinkInt } from "./footerUtils";
import { skillsArray, SkillInt } from "./skillsUtils";

export function renderFooterLinks(): React.ReactNode {
  return footerLinks.map(function (item: footerLinkInt, idx: number) {
    let className: string =
      "footer-link h-full border-b md:border-b-0 md:border-r flex items-center md:items-end -translate-y-full";
    if (idx === footerLinks.length - 1) {
      className =
        "footer-link h-full border-b md:border-b-0 flex items-center md:items-end -translate-y-full";
    }
    return (
      <a
        key={item.id}
        target={item.href.includes("mailto") ? "" : "__blank"}
        href={item.href}
        className="block h-1/4 md:h-full md:w-3/12 md:pt-2"
      >
        <div className="h-full overflow-hidden">
          <div className={className}>
            <div className="pl-5 md:pb-2 w-full">{item.anchor}</div>
          </div>
        </div>
      </a>
    );
  });
}

export function renderSkills(): React.ReactNode {
  return skillsArray.map(function mapSkills(
    item: SkillInt
  ): React.ReactElement {
    return (
      <article
        key={item.id}
        className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center"
      >
        <figure
          className={
            "w-[70%] lg:w-2/4 aspect-square flex justify-center items-center rounded-xl mb-1 " +
            item.color
          }
        >
          <img
            className="w-[70%] h-auto"
            src={item.src}
            alt={item.name + " logo"}
          />
        </figure>
        <h3 className="font-medium">{item.name}</h3>
      </article>
    );
  });
}
