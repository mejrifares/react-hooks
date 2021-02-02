import React, {useState} from 'react'
import {Button, Modal,} from 'react-bootstrap'

const AddMovie = ({AddNew}) => {
  const [AddMovies, setAddMovies] = useState ({
    name: "",
    image: "",
    rating: "",
    description: "",
    date: "",
  })

  const Handlechange = (e) => {

    setAddMovies ({ ...AddMovies,[e.target.name]: e.target.value})
    

  }
console.log(AddMovie)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{paddingTop:'50px', paddingBottom:'50px'}}>
             <Button variant="primary" onClick={handleShow}>
        Add Your Best Movie Here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <span>enter name here</span>
        <input type="text" placeholder="name" name="name" onChange={Handlechange} />
        <span>the rating here</span>
        <input type="text" placeholder="rating" name="rating" onChange={Handlechange} />
        <span>image here</span>
        <input type="text" placeholder="image"  name="image" onChange={Handlechange} />
        <span>enter description here</span>
        <input type="text" placeholder="description" name="description" onChange={Handlechange} />
        <span>enter the date here</span>
        <input type="text" placeholder="date" name="date" onChange={Handlechange} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button >
          <Button onClick={()=>AddNew(AddMovies)} variant="primary">
            Add Movie
          </Button >
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
