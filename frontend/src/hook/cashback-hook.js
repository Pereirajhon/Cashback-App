import { useEffect, useState } from "react";
import { gerarCashback, buscarHistoricostorico } from "../api/api-cashback";

export function useCashback() {
  const [historico, setHistorico] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadHistorico() {
    try {
      const data = await buscarHistorico();
      console.log(data)
      setHistorico(data);
    } catch (err) {
      setError(err.message);
    }
  }

  async function gerar(dataForm) {
    setLoading(true);
    setError(null);

    try {
      const res = await gerarCashback(dataForm);
      setResultado(res);

      // atualiza histórico automaticamente
      await loadHistorico();

      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHistorico();
  }, []);

  return {
    historico,
    resultado,
    loading,
    error,
    gerar,
    reloadHistorico: loadHistorico,
  };
}