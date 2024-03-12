import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const AddForm = ({ formData, type, handleSubmit, handleChange }) => {
  // name: "",
  // description: "",
  // recipe: "",
  // serve: "",
  return (
    <Card>
      <CardBody>
        <CardTitle className="font-weight-bold text-center">
          Add {type}
        </CardTitle>
        <CardText className="font-italic">
          <Form onSubmit={(e) => handleSubmit(e, type)}>
            <FormGroup>
              <Label for="name" hidden>
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                type="text"
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="description" hidden>
                Description
              </Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                type="text"
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="recipe" hidden>
                Recipe
              </Label>
              <Input
                id="recipe"
                name="recipe"
                value={formData.recipe}
                onChange={handleChange}
                placeholder="Recipe"
                type="text"
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="serve" hidden>
                Serve
              </Label>
              <Input
                id="serve"
                name="serve"
                value={formData.serve}
                onChange={handleChange}
                placeholder="Serve"
                type="text"
              />
            </FormGroup>{" "}
            <Button>Add</Button>
          </Form>
        </CardText>
      </CardBody>
    </Card>
  );
};
export default AddForm;
