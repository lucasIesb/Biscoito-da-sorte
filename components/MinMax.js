import React from "react";
import { Text } from "react-native";

export default function MinMax(props) {
    const { min, max } = props;

    const menorValor = Math.min(min, max);
    const maiorValor = Math.max(min, max);

    return (
        <Text>
            {maiorValor}
        </Text>
    );
}
