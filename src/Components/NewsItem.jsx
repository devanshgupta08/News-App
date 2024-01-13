import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function NewsItem (props) {

    const alt = "https://vishwaentertainers.com/wp-content/uploads/2020/04/No-Preview-Available.jpg"
        const { article } = props;
        return (
            <div className='d-flex justify-content-center'>
                <Card >
                    <Card.Img variant="top" src={article.urlToImage || alt} />
                    <Card.Body>
                        <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{top:"2%",left :"90%",zIndex:1}}>
                            {article.source.name}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.description}
                        </Card.Text>
                        <Button variant="primary" href={article.url} target='_blank'>Details</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By {article.author ? article.author : "Unkown"} on {new Date(article.publishedAt).toGMTString().slice(0, 22)}</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    
}
