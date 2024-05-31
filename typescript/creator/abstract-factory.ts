interface Button {
    render(): void
    onClick(f: Function): void
}

interface CheckBox {
    render(): void
    toggle(): void
}

interface GUIFactory {
    createButton(): Button
    createCheckBox(button: Button): CheckBox
}


class WindowsButton implements Button {
    public render(): void {
        console.log("Render a button in windows")
    }

    public onClick(): void {
        console.log("onClick windows Button")
    }
}

class WindowsCheckbox implements CheckBox {
    constructor(private button: Button){}

     public render(): void {
        console.log("Render a button in windows")
    }

    public toggle(): void {
        this.button.onClick(() => {
            console.log("toggle windows checkbox")
        })
    }
}

class MACOSButton implements Button {
    public render(): void {
        console.log("Render a button in MACOS")
    }

    public onClick(): void {
        console.log("onClick MACOS Button")
    }
}

class MACOSCheckbox implements CheckBox {
    constructor(private button: Button){}

     public render(): void {
        console.log("Render a button in MACOS")
    }

    public toggle(): void {
        this.button.onClick(() => {
            console.log("toggle MACOS checkbox")
        })
    }
}


class WindowsFactory implements GUIFactory{
    public createButton() {
        return new WindowsButton()
    }

    public createCheckBox(button: Button) {
        return new WindowsCheckbox(button)
    }
}

class MacosFactory implements GUIFactory{
    public createButton() {
        return new MACOSButton()
    }

    public createCheckBox(button: Button) {
        return new MACOSCheckbox(button)
    }
}

function renderUI(factory: GUIFactory) {
    const button = factory.createButton()
    const checkbox = factory.createCheckBox(button)

    button.render()
    button.onClick(() => console.log('button is clicked'))
    checkbox.render()
    checkbox.toggle()
}

renderUI(new WindowsFactory)
renderUI(new MacosFactory)
