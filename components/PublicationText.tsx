import * as React from "react";
import {Text} from "react-native";

interface Props {
    text: string
}

const PublicationText = (props: Props) => {
    return (
        <Text
            style={{fontSize: 16, fontWeight: '800'}}
            numberOfLines={3}
        >{props.text}</Text>
    )
}

export default PublicationText