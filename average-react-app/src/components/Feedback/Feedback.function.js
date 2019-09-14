
import React from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

function handleSubmit(e) {
    
}

    return (
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Title>Class Example</Title>
          <Label>
            Have feedback for our team? <br /> Let us know here 👇
            <Textarea
              value={this.state.text}
              onChange={e => this.handleTextChange(e)}
            />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
      )