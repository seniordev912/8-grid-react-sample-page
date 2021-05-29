import React, { Component } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images';
// import "../../assets/css/hotelDetail.css";

export class ImageModal extends Component {

  render() {
    const images = [{ source: 'https://www.cuddlynest.com/images/listings/2019/07/16/20/b26de3dd3bf34aeb080849985bc3bb49.jpg' },
     { source: 'https://www.cuddlynest.com/images/listings/2019/07/16/20/811f4dfa891add2ad20c25ddf0616f32.jpg' },
     { source: 'https://www.cuddlynest.com/images/listings/2019/07/16/20/15ea929f303a020236a7a5ae06ba0563.jpg' },
     { source: 'https://www.cuddlynest.com/images/listings/2019/07/16/20/b4aa66a62574409095375046b23bca8c.jpg' },
     { source: 'https://www.cuddlynest.com/images/listings/2019/07/16/20/a85bc2510e0fa3cac95da9d4e8abe3cf.jpg' }
    ];
    return (
      <ModalGateway>
          <Modal onClose={this.props.toggleModal}>
              
            <Carousel views={images} />
          </Modal>
      </ModalGateway>
    );
  }
}

export default ImageModal;