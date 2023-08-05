import React from "react";

type Props = {
    content: string;
};

export default function WorkCard({ content }: Props) {
    return (
        <div>
            <p>{content}</p>
        </div>
    );
}
