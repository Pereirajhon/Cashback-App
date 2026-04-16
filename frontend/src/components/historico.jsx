import "./historico.css";

export default function Historico({ data = [] }) {

  console.log(data)
  return (
    <div className="historico-container">
      <h2>Histórico de Cashback</h2>

      <table className="historico-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Tipo</th>
            <th>Valor Compra</th>
            <th>Cashback</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="empty">
                Nenhum registro encontrado
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.data_cashback
                    ? new Date(item.data_cashback).toLocaleString("pt-BR")
                    : "-"}
                </td>

                <td>{item.tipo_cliente}</td>

                <td>R$ {item.valor_compra}</td>

                <td>R$ {item.valor_cashback}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}