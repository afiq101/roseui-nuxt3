export default [
  {
    child: [
      {
        title: "Utama",
        path: "/dashboard",
        icon: "ic:outline-dashboard",
        child: [],
      },
    ],
  },
  {
    header: "General",
    description: "Menu Utama",
    child: [
      {
        title: "Wakaf",
        icon: "ph:handshake",
        //path: "/wakaf",
        child: [
          {
            title: 'Kategori Wakaf',
            path: '/wakaf'
          },
          {
            title: 'Tambah Kategori',
            path: '/wakaf/add'
          }
        ]
      },
      {
        title: "Pengguna",
        icon: "ph:users-three",
        path: "/pengguna",
      },
      {
        title: "Institusi",
        icon: "fluent:organization-24-regular",
        path: "/institusi",
      },
      {
        title: "Kredit",
        icon: "ph:wallet",
        child: [
          {
            title: "Akaun",
            icon: "ph:user",
            path: "/kredit",
          },
          {
            title: "Pengguna",
            icon: "ph:users-three",
            path: "/kredit/akaun-kredit-pengguna",
          },
          {
            title: "Institusi",
            icon: "fluent:organization-24-regular",
            path: "/kredit/akaun-kredit-institusi",
          }
        ]
      },
      {
        title: "Transaksi",
        icon: "ph:list-dashes",
        path: "/transaksi",
      },
      {
        title: "Kewangan",
        icon: "icon-park-outline:financing-one",
        path: "/kewangan",
      },
      {
        title: "Agihan",
        icon: "majesticons:money-hand-line",
        path: "/agihan",
      },
      {
        title: "Kempen",
        icon: "mdi:advertisements",
        //path: "/kempen",
        child: [
          {
            title: 'Senarai Kempen',
            path: '/kempen'
          },
          {
            title: 'Tambah Kempen',
            path: '/kempen/add'
          }
        ]
      },
      {
        title: "Keahlian",
        icon: "material-symbols:card-membership-outline",
        //path: "/kempen",
        child: [
          {
            title: 'Senarai Keahlian',
            path: '/keahlian'
          },
          {
            title: 'Tambah Kempen',
            path: '/keahlian/add'
          }
        ]
      },
      {
        title: "Komisen",
        icon: "ph:coins-light",
        child: [
          {
            title: 'Senarai Komisen',
            path: '/komisen'
          },
          // {
          //   title: 'Tambah Komisen',
          //   path: '/komisen/add'
          // },
        ]
      },
      {
        title: "Laporan",
        icon: "fluent-mdl2:report-lock",
        path: "/laporan",
      },
    ],
  },
  {
    header: "Tetapan",
    description: "Aplikasi & Sistem",
    child: [
      {
        title: "Auto Wakaf",
        icon: "fluent-mdl2:recurring-event",
        path: "/recurring",
      },
      {
        title: "Aplikasi",
        icon: "ph:device-mobile",
        path: "/tetapan/aplikasi",
      },
      {
        title: "Sistem",
        icon: "ph:gear",
        path: "/tetapan/sistem",
      }
    ],
  },
  // {
  //   header: "UI Elements",
  //   description: "Component for the ui",
  //   child: [
  //     {
  //       title: "Typography",
  //       path: "/ui/typography",
  //       icon: "ic:outline-alternate-email",
  //     },
  //     {
  //       title: "Colors",
  //       path: "/ui/colors",
  //       icon: "ic:outline-water-drop",
  //     },
  //     {
  //       title: "Icon",
  //       icon: "ic:outline-flag-circle",
  //       child: [
  //         {
  //           title: "Nuxt Icons",
  //           path: "/ui/icon/nuxt-icon",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Component",
  //       icon: "ic:outline-settings-input-component",
  //       child: [
  //         {
  //           title: "Alert",
  //           path: "/ui/component/alert",
  //         },
  //         {
  //           title: "Badges",
  //           path: "/ui/component/badges",
  //         },
  //         {
  //           title: "Buttons",
  //           path: "/ui/component/buttons",
  //         },
  //         {
  //           title: "Calendar",
  //           path: "/ui/component/calendar",
  //         },
  //         {
  //           title: "Carousel",
  //           path: "/ui/component/carousel",
  //         },
  //         {
  //           title: "Collapse",
  //           path: "/ui/component/collapse",
  //         },
  //         {
  //           title: "Dropdown",
  //           path: "/ui/component/dropdown",
  //         },
  //         {
  //           title: "Modal",
  //           path: "/ui/component/modal",
  //         },
  //         {
  //           title: "Tab",
  //           path: "/ui/component/tab",
  //         },
  //         {
  //           title: "Progress",
  //           path: "/ui/component/progress",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Chart",
  //       icon: "ic:outline-pie-chart",
  //       child: [
  //         {
  //           title: "Apex Chart",
  //           path: "/ui/chart/apex-chart",
  //         },
  //         {
  //           title: "Chartjs",
  //           path: "/ui/chart/chartjs",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   header: "Forms & Tables",
  //   description: "Form and table component",
  //   child: [
  //     {
  //       title: "Form",
  //       icon: "ic:outline-menu-book",
  //       child: [
  //         {
  //           title: "Element",
  //           child: [
  //             {
  //               title: "Input",
  //               path: "/form/element/input",
  //             },
  //             {
  //               title: "Input Group",
  //               path: "/form/element/input-group",
  //             },
  //             {
  //               title: "Input Mask",
  //               path: "/form/element/input-mask",
  //             },
  //             {
  //               title: "Textarea",
  //               path: "/form/element/textarea",
  //             },
  //             {
  //               title: "Number",
  //               path: "/form/element/number",
  //             },
  //             {
  //               title: "Password",
  //               path: "/form/element/password",
  //             },
  //             {
  //               title: "Date & Time",
  //               path: "/form/element/date-time",
  //             },
  //             {
  //               title: "Radio",
  //               path: "/form/element/radio",
  //             },
  //             {
  //               title: "Checkbox",
  //               path: "/form/element/checkbox",
  //             },
  //             {
  //               title: "Select",
  //               path: "/form/element/select",
  //             },
  //             {
  //               title: "File",
  //               path: "/form/element/file",
  //             },
  //             {
  //               title: "Custom",
  //               path: "/form/element/custom",
  //             },
  //             {
  //               title: "VCalendar",
  //               path: "/form/element/vcalendar",
  //             },
  //             {
  //               title: "Vue Select",
  //               path: "/form/element/vue-select",
  //             },
  //             {
  //               title: "Vue Quill",
  //               path: "/form/element/vue-quill",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Wizard",
  //           path: "/form/wizard",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Table",
  //       icon: "ic:outline-grid-on",
  //       child: [
  //         {
  //           title: "Basic",
  //           path: "/table/basic",
  //         },
  //         {
  //           title: "Advanced",
  //           path: "/table/advanced",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
