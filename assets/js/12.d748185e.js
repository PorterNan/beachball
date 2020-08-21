(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{360:function(e,a,t){"use strict";t.r(a);var s=t(25),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("There are "),t("a",{attrs:{href:"https://semantic-release.gitbook.io/semantic-release/",target:"_blank"}},[e._v("very popular")]),e._v(" and excellent packages available which manage package versioning already. Beachball works differently: "),t("code",[e._v("beachball")]),e._v(' does _not_ rely on commit messages for determining the next semantic version. Rather, it uses something called a "change file".')]),e._v(" "),t("h3",{attrs:{id:"what-is-a-change-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-change-file"}},[e._v("#")]),e._v(" What is a Change File?")]),e._v(" "),t("p",[e._v("After you have made some commits, you are ready to create a change file. A change file is generated for you by "),t("code",[e._v("beachball")]),e._v(". "),t("code",[e._v("beachball")]),e._v(" uses the change file to determine how to bump versions in your package.")]),e._v(" "),t("p",[e._v("To generate a change file, you run this command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ beachball change "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# could leave out "change" command since it is the default')]),e._v("\n")])])]),t("p",[e._v("It will ask you to put in a description and a change type. Don't worry though, "),t("code",[e._v("beachball")]),e._v(" is nice and will find recent commit messages if you would rather describe your changes based on something you already typed! The type of change you specify will influence how "),t("code",[e._v("beachball")]),e._v(" will bump your version.")]),e._v(" "),t("p",[e._v("After you've answered those questions, a change file is created and commited in your branch under "),t("code",[e._v("/change")]),e._v(" that looks like this:")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"comment"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Upgrading React to 16.8.x to use hooks"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"minor"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"packageName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my-amazing-app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"email"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"me@me.me"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"commit"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"b785112c03f063b71d936ff052470817019267d4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"date"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2019-06-20T22:54:59.172Z"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("If you have some existing change file for this package, "),t("code",[e._v("beachball")]),e._v(" will assume you're still working on the same feature and will skip the dialog.")]),e._v(" "),t("h3",{attrs:{id:"working-with-the-change-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-change-file"}},[e._v("#")]),e._v(" Working with the change file")]),e._v(" "),t("p",[t("code",[e._v("beachball")]),e._v(" uses change files to indicate change type for a very good reason. File diffs work wonderfully well in all PR systems. These tools are well suited to visualize file diffs and allows a chance for reviewers to review what is written in a change file.")]),e._v(" "),t("p",[e._v("For example, a reviewer might remind the author that a certain new API has been introduced and that the change ought to be a minor. The author can then modify the change file without having to ammend history of a commit!")])])}),[],!1,null,null,null);a.default=n.exports}}]);