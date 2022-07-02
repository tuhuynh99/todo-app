import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function Todo() {
  // fetch data from api

  // let TodoId = match.params.id
  // let [Todo, setTodo] = useState(null)

  // useEffect(() => {
  //     getTodo()
  // }, [TodoId])

  // let getTodo = async () => {
  //     if (TodoId === 'new') return

  //     let response = await fetch(`/api/Todos/${TodoId}/`)
  //     let data = await response.json()
  //     setTodo(data)
  // }

  // let createTodo = async () => {
  //     fetch(`/api/Todos/`, {
  //         method: "POST",
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(Todo)
  //     })
  // }

  // let updateTodo = async () => {
  //     fetch(`/api/Todos/${TodoId}/`, {
  //         method: "PUT",
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(Todo)
  //     })
  // }

  // let deleteTodo = async () => {
  //     fetch(`/api/Todos/${TodoId}/`, {
  //         method: 'DELETE',
  //         'headers': {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //     history.push('/')
  // }

  // let handleSubmit = () => {
  //     console.log('Todo:', Todo)
  //     if (TodoId !== 'new' && Todo.body == '') {
  //         deleteTodo()
  //     } else if (TodoId !== 'new') {
  //         updateTodo()
  //     } else if (TodoId === 'new' && Todo.body !== null) {
  //         createTodo()
  //     }
  //     history.push('/')
  // }

  // let handleChange = (value) => {
  //     setTodo(Todo => ({ ...Todo, 'body': value }))
  //     console.log('Handle Change:', Todo)
  // }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto d-flex justify-content-center">
            <Form.Check type="checkbox" id="1" />{" "}
          </div>
          <div className="col">drinking a lot of water</div>

          <div className="col-auto">
            <div className="row ">
              <div class="col">
                <Button variant="outline-primary ">Add Todo</Button>
              </div>
              <div class="col">
                <Button variant="outline-primary">Add Todo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
