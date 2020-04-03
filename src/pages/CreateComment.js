import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateComment = () => {
    const [ article_id, setArticle_id ] = useState("");
    const [ content, setContent ]       = useState("");
    const [ author_id, setAuthor_id ]   = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("article_id : ", article_id);
        console.log("content : ", content);
        console.log("author_id : ", author_id);
        }

    const handleChange = (event) => {
        console.log("target name : ", event.target.name);
        console.log("target value : ", event.target.value);

        /*if (event.target.name === "articles_id") {
            setArticle_id(event.target.value);
        } else if (event.target.value === "content") { 
            setContent(event.target.value);
        } else {
            setAuthor_id(event.target.value);
        }
        */ 

        switch(event.target.name) {
            case "article_id":
                setArticle_id(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
                break;
            case "author_id":
                setAuthor_id(event.target.value);
                break;
            // no default

        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comment.article_id">
                    <Form.Label>ARTICLE ID</Form.Label>
                    <Form.Control
                        type="number"
                        name="article_id"
                        onChange={handleChange}
                        value={article_id}
                        placeholder="Id of your article"
                />
                </Form.Group>
                <Form.Group controlId="comment.content">
                    <Form.Label>CONTENT</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content}
                        placeholder="Contents of your comments"
                    />
                </Form.Group>
                <Form.Group controlId="comment.author_id">
                    <Form.Label>AUTHOR ID</Form.Label>
                    <Form.Control
                        type="number"
                        name="author_id"
                        onChange={handleChange}
                        value={author_id}
                        placeholder="Author id"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Create Comments</Button>
            
            </Form>
       </Container>
    )
};

export default CreateComment;