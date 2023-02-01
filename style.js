const parentBlock = document.getElementsByClassName("parent-block");

for (const element of parentBlock) {
	const Btn = document.createElement("button");
	Btn.className = "block-btn";
	Btn.innerText = "Save";
	element.appendChild(Btn);
}