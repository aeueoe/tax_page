const primaryFeaturesDesktopTabs = document.querySelector(
  ".c-primary-features_tabs"
);
const primaryFeaturesMobileTabs = document.querySelector(
  ".c-primary-features_list-items"
);
const primaryFeaturesListItems = document.querySelector(
  ".c-primary-features_list-items ul"
);
const primaryFeaturesListItemSubtitle = document.querySelector(
  ".c-primary-features_list-items p"
);
const primaryFeaturesImg = document.querySelector(
  ".c-primary-features_img__wrapper img"
);
const secondaryFeaturesTabs = document.querySelector(
  ".c-secondary-features__section__tabs"
);
const secondaryFeaturesImgsContainer = document.querySelector(
  ".c-secondary-features__section__imgs__container"
);

function addRemoveHidden(type) {
  if (type === "sm") {
    primaryFeaturesDesktopTabs.classList.add("hidden");
    secondaryFeaturesImgsContainer.classList.add("hidden");
    primaryFeaturesMobileTabs.classList.remove("hidden");
    [...secondaryFeaturesTabs.children].forEach((item) => {
      item.classList.add("c-active");
    });
  } else if (type === "lg") {
    primaryFeaturesDesktopTabs.classList.remove("hidden");
    secondaryFeaturesImgsContainer.classList.remove("hidden");
    primaryFeaturesMobileTabs.classList.add("hidden");
    [...secondaryFeaturesTabs.children].forEach((item) => {
      item.classList.remove("c-active");
    });

    secondaryFeaturesTabs.firstElementChild.classList.add("c-active");
  }
}

const events = ["DOMContentLoaded", "resize"];

for (let i = 0; i < events.length; i++) {
  window.addEventListener(events[i], () => {
    if (window.innerWidth < 1024) {
      addRemoveHidden("sm");
    } else if (window.innerWidth >= 1024) {
      addRemoveHidden("lg");
    }
  });
}

const featuresPrimaryData = {
  subtitle: [
    `Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.`,
    `All of your receipts organized into one place, as long as you don't mind typing in the data by hand.`,
    `We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.`,
    `Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it`,
  ],
  img: [
    `assets/primary features/payroll.png`,
    `assets/primary features/expenses.png`,
    `assets/primary features/vat-returns.png`,
    `assets/primary features/reporting.png`,
  ],
};

primaryFeaturesListItems.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    [...primaryFeaturesListItems.children].forEach((item) => {
      item.classList.remove("c-active");
    });
    const dataIndex = Number(e.target.closest("LI").dataset.index);
    e.target.closest("LI").classList.add("c-active");
    primaryFeaturesListItemSubtitle.textContent =
      featuresPrimaryData.subtitle[dataIndex];
    primaryFeaturesImg.src = featuresPrimaryData.img[dataIndex];
  }
});

primaryFeaturesDesktopTabs.addEventListener("click", (e) => {
  if (e.target.closest(".c-primary-features_tab-wrapper")) {
    [...primaryFeaturesDesktopTabs.children].forEach((item) => {
      item.classList.remove("c-active");
    });
    const dataIndex = Number(
      e.target.closest(".c-primary-features_tab-wrapper").dataset.index
    );
    primaryFeaturesImg.src = featuresPrimaryData.img[dataIndex];
    e.target
      .closest(".c-primary-features_tab-wrapper")
      .classList.add("c-active");
  }
});
