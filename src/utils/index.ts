export const changeFavicon = (iconUrl: string): void => {
  const link: HTMLLinkElement = document.createElement("link");
  link.rel = "shortcut icon";
  link.type = "image/x-icon";
  link.href = iconUrl;

  const head: HTMLHeadElement | null = document.head;

  if (head) {
    const existingLink: HTMLLinkElement | null = document.querySelector(
      'link[rel="shortcut icon"]'
    );

    if (existingLink) {
      head.removeChild(existingLink);
    }
    head.appendChild(link);
  }
};
