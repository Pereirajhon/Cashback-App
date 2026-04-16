import React, { useState, useEffect } from "react";
import Historico from "../../components/historico";
import { gerarCashback, buscarHistorico } from "../../api/api-cashback";
import "./home.css";

export default function HomePage() {
  const [tipo, setTipo] = useState("cliente");
  const [valor, setValor] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [ordenacao, setOrdenacao] = useState("recent");


  async function loadHistorico() {
    try {
      const res = await buscarHistorico(ordenacao);
      setHistorico(res);
    } catch (err) {
      console.error("Erro ao buscar histórico:", err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!valor || Number(valor) <= 0 || isNaN(Number(valor))) {
      return alert("Informe um valor válido");
    }

    setLoading(true);

    try {
      const res = await gerarCashback({
        tipo_cliente: tipo,
        valor_compra: Number(valor),
      });

      setResultado(res);
      setValor("");
      await loadHistorico();
    } catch (err) {
      alert("Erro ao gerar cashback");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHistorico()
  }, [ordenacao])

  return (
    <div className="container">
      <h1>Cashback App</h1>

      <div className="card">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <label>Tipo de cliente</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="cliente">Cliente</option>
              <option value="cliente vip">Cliente VIP</option>
            </select>
          </div>

          <div className="form-group">
            <label>Valor da compra</label>
            <input
              type="number"
              placeholder="Ex: 100"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
        </div>
        <button className="form-button">
          Calcular Cashback
        </button>
      </form>
        {resultado && (
          <div>
            <p>Cashback gerado:</p>
            <strong>
              R${" "}
              {Number(resultado.cashback).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </strong>
          </div>
        )}
      </div>

      <Historico ordenacao={ordenacao} setOrdenacao={setOrdenacao} data={historico} />
    </div>
  );
}
