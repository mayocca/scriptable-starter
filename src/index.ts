const widget = new ListWidget();
widget.backgroundColor = new Color("#1f1f1f");

const title = widget.addText("Hello world!");
title.textColor = Color.white();
title.font = Font.boldSystemFont(20);

widget.addSpacer();

const footer = widget.addText("github.com/mayocca/scriptable-starter");
footer.textColor = Color.gray();
footer.font = Font.italicSystemFont(10);

Script.setWidget(widget);
Script.complete();
