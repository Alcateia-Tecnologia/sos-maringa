import { Button } from "react-native";

export default function CallButton() {
  return (
    <Button
      onPress={() => {
        // Lógica para iniciar uma chamada telefônica
        console.log("Iniciando chamada...");
      }}
      title="Ligar agora"
      color="#01a63f"
      accessibilityLabel="Ligar agora para um serviço de emergência."
    />
  );
}