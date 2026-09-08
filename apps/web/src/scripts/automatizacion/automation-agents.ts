class AutomationAgents extends HTMLElement {
  connectedCallback() {
    const tabs = Array.from(this.querySelectorAll<HTMLButtonElement>('[data-area]'))
    const panels = Array.from(this.querySelectorAll<HTMLElement>('.ai-agent-panel'))
    this.querySelector('.ai-agent-tabs')?.setAttribute('role', 'tablist')
    const select = (index: number, focus = false) => {
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index))
        tab.tabIndex = i === index ? 0 : -1
        panels[i].hidden = i !== index
      })
      if (focus)
        tabs[index].focus()
    }
    tabs.forEach((tab, i) => {
      tab.setAttribute('role', 'tab')
      tab.setAttribute('aria-controls', panels[i].id)
      panels[i].setAttribute('role', 'tabpanel')
      panels[i].tabIndex = 0
      tab.onclick = () => select(i)
      tab.onkeydown = (event) => {
        let next = i
        if (event.key === 'ArrowRight')
          next = (i + 1) % tabs.length
        else if (event.key === 'ArrowLeft')
          next = (i - 1 + tabs.length) % tabs.length
        else if (event.key === 'Home')
          next = 0
        else if (event.key === 'End')
          next = tabs.length - 1
        else return
        event.preventDefault()
        select(next, true)
      }
    })
    select(0)
  }
}
if (!customElements.get('automation-agents'))
  customElements.define('automation-agents', AutomationAgents)
