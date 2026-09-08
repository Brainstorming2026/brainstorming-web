class AutomationMatrix extends HTMLElement {
  connectedCallback() {
    const buttons = Array.from(this.querySelectorAll<HTMLButtonElement>('[data-priority]'))
    const details = Array.from(this.querySelectorAll<HTMLElement>('[data-priority-detail]'))
    const select = (index: number) => {
      buttons.forEach((button, i) => {
        button.setAttribute('aria-pressed', String(i === index))
        details[i].hidden = i !== index
      })
    }
    buttons.forEach((button, index) => {
      button.onpointerenter = (event) => {
        if (event.pointerType === 'mouse')
          select(index)
      }
      button.onfocus = () => select(index)
      button.onclick = () => select(index)
    })
  }
}
if (!customElements.get('automation-matrix'))
  customElements.define('automation-matrix', AutomationMatrix)
