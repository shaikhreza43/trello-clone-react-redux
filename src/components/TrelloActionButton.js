import { Button, Card, Icon } from '@material-ui/core';
import React, { useState } from 'react';

import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import {addList,addCard} from '../actions';

const TrelloActionButton = ({ list,dispatch,listId }) => {

    const [openForm, setOpenForm] = useState(false);

    const [text, setText] = useState('');

    const renderAddButton = () => {
        const buttonText = list ? "Add Another List" : "Add Another Card";
        const buttonOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonBackgroundColor = list ? "rgba(0,0,0,0.15)" : "inherit";

        return (
            <div onClick={() => setOpenForm(true)} style={{ ...styles.openFormButtonGroup, opacity: buttonOpacity, color: buttonTextColor, backgroundColor: buttonBackgroundColor }}>
                <Icon>add</Icon>
                <p>{buttonText} </p>
            </div>
        )
    }

    const handleAddList = ()=>{
        setText("");
        if(text){
            dispatch(addList(text));
        }
        return;
    }

    const handleAddCard = ()=>{
        setText("");
        if(text){
            dispatch(addCard(listId,text));
        }
    }

    const renderForm = () => {

        const placeholder = list ? "Enter List Title..." : "Enter Card Title...";
        const buttonTitle = list ? "Add List" : "Add Card";

        return (
            <div>
                <Card style={{
                    minHeight: 80,
                    minWidth: 272,
                    padding: "6px 8px 2px"
                }}>
                    <Textarea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={() => setOpenForm(false)}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{
                            resize: "none",
                            width: '100%',
                            outline: "none",
                            border: "none",
                            overflow: 'hidden'
                        }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button onMouseDown={list? handleAddList:handleAddCard} variant="contained" style={{ color: 'white', backgroundColor: "#5aac44" }}>
                        {buttonTitle}{" "}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
                </div>
            </div>
        )
    }

    return (
        <>
            {openForm ? renderForm() : renderAddButton()}
        </>
    )
}

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        display: "flex",
        marginTop: 8,
        alignItems: "center"
    }
}


export default connect()(TrelloActionButton);