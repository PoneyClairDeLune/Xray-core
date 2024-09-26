// Copyright (c) 2021-2024 Project X. Mozilla Public License 2.0.

"use strict";

let main = async () => {
	// Runs in the main scope after the page becomes interactive
};

switch (document.readyState) {
	case "loading": {
		document.addEventListener("readystatechange", (ev) => {
			if (document.readyState == "interactive") {
				main();
			};
		});
		break;
	};
	case "interactive":
	case "complete": {
		main();
	};
};
