import React,{Component} from 'react';
import { Row , Col ,Card , CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import Header from './Header'

  export default class Bill extends Component {
      state={
          to:JSON.parse( localStorage.getItem('tranfer') ).id,
          money:JSON.parse( localStorage.getItem('tranfer') ).money
      }
      print = () => {
          window.print();
      }
      test = () =>{
          console.log( JSON.parse(localStorage.getItem('tranfer')).id )
      }
    render(){
            return (
                <div>
                   {this.test()}
                    <Header/>
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <Card>
                                <CardBody>
                                <CardTitle>Tranfer to {this.state.to}</CardTitle>
                                <CardSubtitle>Total tranfer : {this.state.money} Bath.</CardSubtitle>
                                <CardText>{
                                    new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()
                                    }<br/>
                                    {new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()}
                                
                                </CardText>
                                <Row>
                                    <Col xs="6">
                                     <Button href="/">Goto Home</Button>
                                    </Col>
                                    <Col xs="6">
                                     <Button onClick={ (e)=>this.print() }>print</Button>
                                    </Col>
                                </Row>
                                
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )

    }
}
