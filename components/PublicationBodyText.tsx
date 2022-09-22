import * as React from "react";
import {Text} from "react-native";
import {useState} from "react";

interface Props {
    text: string
}

const PublicationBodyText = (props: Props) => {
    const [show, setShow] = useState(false)

    return (
        <Text
            onPress={() => setShow(!show)}
            style={{fontSize: 16, fontWeight: '800'}}
            numberOfLines={show ? 0 : 3}
        >{props.text}</Text>
    )
}

export default PublicationBodyText