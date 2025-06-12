import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["nome", "input"]
  static values = { saudar: String }

  saudar() {
    this.nomeTarget.textContent = `${this.saudarValue} ${this.inputTarget.value}!`
  }
}
