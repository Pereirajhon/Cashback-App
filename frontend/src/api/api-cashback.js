const API_URL = "https://cashback-app-paej.onrender.com"

export async function gerarCashback(data) {
  const res = await fetch(`${API_URL}/cashback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Erro ao gerar cashback");
  }

  return res.json();
}

export async function buscarHistorico(ordem="recent") {
  const res = await fetch(`${API_URL}/historico?ordem=${ordem}`);

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Erro ao buscar histórico");
  }

  return res.json();
}