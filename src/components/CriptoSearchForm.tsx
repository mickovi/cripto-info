import { currencies } from "../data";

export default function CriptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Currency:</label>
        <select name="currency" id="currency">
          <option value="">Select a Currency</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Criptocurrency:</label>
        <select name="criptocurrency" id="criptocurrency">
          <option value="">Select a Criptocurrency</option>
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  )
}
