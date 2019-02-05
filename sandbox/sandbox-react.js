import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as B from './react/dist/index';
// import './css/dist/indigo.css'

const BCC = props => {
  return (
    <div className='b-0 bt-1 pt-1 b-solid b-gray-70 fs-275 text-400 sans gray-70 mt-10 mb-8 flex'>
      <div className={'col-md-1'}>
        {props.title}
      </div>
      <div className={'col-md-5 mr-16'}>
        {props.desc}
        {props.children}
      </div>
      <div className={'col-md-5 mr-16'}>
        {props.comp}
      </div>
    </div>
  )
}


const BCH = props => {
  return (
    <div className={'fs-275 text-400 sans gray-70 mb-8 flex-column mt-10'}>
      <div className={'mb-1'}>{'BaseComponents Specimens'}</div>
      <div className={'mb-1'}>{'Author: ~ridlur-figbud Gavin Atkinson <gavin@tlon.io>'}</div>
      <div className={'mb-1'}>{'Created: ~2018.1.16'}</div>
    </div>
  )
}


const BCS = props => {
  return (
    <B.Row rowClassName={''}>
      <div className={'col-md-1'} />
      <div className={'col-md-5'}>
        {props.children}
      </div>
    </B.Row>
  )
}

class WelcomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      innerLabel: '',
      innerLabelLarge: '',
    }

    this.setValue = this.setValue.bind(this)
  }

  setValue(v, k) {
    console.log(v, k)
    this.setState({ [k]: v })
  }

  submit(f) {
    console.log(f)
  }


  render() {

    const { props, state } = this
    return (
      <B.Container className='mb-16'>
        <B.RowCol>
          <BCH>

          </BCH>



          <BCC
            title='Headings'
            desc='Here are our headings. We use Work Sans.This time I know where I am going, it is no longer the ancient night, the recent night. Now it is a game, I am going to play. I never knew how to play, till now. I longed to, but I knew it was impossible. And yet I often tried. I turned on all the lights, I took a good look all round, I began to play with what I saw.'
            comp='<H1/>, <H2/>, <H3/>, <H4/>' />
          <BCS>
            <B.H1>H1: Welcome to Arvo</B.H1>

            <B.H2>H2: Your Azmiuth Points</B.H2>

            <B.H3>H3: Public and Private Keys</B.H3>

            <B.H4>H4: Oblong</B.H4>
          </BCS>

          <BCC
            title='Body Type'
            desc='Here are our headings. We use Work Sans.This time I know where I am going, it is no longer the ancient night, the recent night. Now it is a game, I am going to play. I never knew how to play, till now. I longed to, but I knew it was impossible. And yet I often tried. I turned on all the lights, I took a good look all round, I began to play with what I saw.'
            comp='<P/>' />
          <BCS>
            <B.P>P: This time I know where I am going, it is no longer the ancient night, the recent night. Now it is a game, I am going to play. I never knew how to play, till now. I longed to, but I knew it was impossible. And yet I often tried. I turned on all the lights, I took a good look all round, I began to play with what I saw.</B.P>
          </BCS>

          <BCC
            title='Buttons'
            desc='Here are our headings. We use Work Sans.This time I know where I am going, it is no longer the ancient night, the recent night. Now it is a game, I am going to play. I never knew how to play, till now. I longed to, but I knew it was impossible. And yet I often tried. I turned on all the lights, I took a good look all round, I began to play with what I saw.'
            comp='<Button/>' />
          <BCS>
            <B.Button prop-size='xs' className='mt-4'>
              xs Button
            </B.Button>

            <B.Button prop-size='sm' className='mt-4'>
              sm Button
            </B.Button>

            <B.Button onClick={() => console.log('Default Button')} className='mt-4'>
              md Button
            </B.Button>

            <B.Button prop-size='lg' className='mt-4'>
              lg Button
            </B.Button>

            <B.Button prop-size='wide lg' className='mt-4 measure-md'>
              wide lg Button
            </B.Button>

            <B.Button prop-size='wide xl' className='mt-4 measure-md'>
              wide xl Button
            </B.Button>

            <B.Button prop-color='green' className='mt-4'>
              Green Button
            </B.Button>

            <B.Button prop-color='yellow' className='mt-4'>
              Yellow Button
            </B.Button>

            <B.Button disabled className='mt-4'>
              Disabled Button
            </B.Button>

            <B.Button prop-size='xs' prop-type='border' className='mt-4'>
              xs outline Button
            </B.Button>

          </BCS>


          <BCC
            title='Anchors'
            desc='Here are our headings. We use Work Sans.This time I know where I am going, it is no longer the ancient night, the recent night. Now it is a game, I am going to play. I never knew how to play, till now. I longed to, but I knew it was impossible. And yet I often tried. I turned on all the lights, I took a good look all round, I began to play with what I saw.'
            comp='<Anchor/>' />
          <BCS>
            <B.Anchor target='_blank' href='https://urbit.org' className='mt-4'>
              Anchor tag ↗
            </B.Anchor>
            <B.Anchor prop-disabled href='https://urbit.org' className='mt-4'>
              Disabled Anchor tag ↗
            </B.Anchor>
          </BCS>


          <BCC
            title='Input Fields'
            desc='Here are our headings. We use Work Sans.This time I know where I am going, it is no longer the ancient night, the recent night. Now it is a game, I am going to play. I never knew how to play, till now. I longed to, but I knew it was impossible. And yet I often tried. I turned on all the lights, I took a good look all round, I began to play with what I saw.'
            comp='<Form/>, <Input />, <TextArea />, <Label />, <InnerLabel />' />
          <BCS>
            <B.Form>


              <B.Input
                className='mt-8'
                prop-size='md'
                prop-format='innerLabel'
                name='innerLabel'
                placeholder='hello world'
                value={ state.innerLabel }
                autocomplete='off'
                onChange={ v => this.setValue(v, 'innerLabel') }>
                <B.InnerLabel>{'Inner Label Input Field (Medium)'}</B.InnerLabel>
              </B.Input>

              <B.Input
                className='mt-8'
                prop-size='lg'
                prop-format='innerLabel'
                name='innerLabel'
                placeholder='hello world'
                value={ state.innerLabelLarge }
                autocomplete='off'
                onChange={ v => this.setValue(v, 'innerLabelLarge') }>
                <B.InnerLabel>{'Inner Label Input Field (Large)'}</B.InnerLabel>
              </B.Input>

              <B.Label>{'Outer Label Input Field (medium)'}</B.Label>
              <B.Input
                className=''
                prop-size='md'
                prop-format=''
                name='normal'
                placeholder='hello world'
                value={ state.normalInput }
                autocomplete='off'
                onChange={ v => this.setValue(v, 'normalInput') }>
              </B.Input>


              <B.Label>{'Outer Label Input Field With Description'}</B.Label>
              <B.Input
                className=''
                prop-size='md'
                prop-format=''
                name='normal'
                placeholder='hello world'
                value={ state.normalInput }
                autocomplete='off'
                onChange={ v => this.setValue(v, 'normalInput') }>
              </B.Input>
              <B.InputCaption>{'If there is a reference implementation (code, working proof-of-concept) included with the UP (see the Integration Plan section below), please include the link to that code too.'}</B.InputCaption>

            </B.Form>
          </BCS>

          <BCC
            title='Forms'
            desc='Here are our headings. We use Work Sans.This time I know where I am going, it is no longer the ancient night, the recent night. Now it is a game, I am going to play. I never knew how to play, till now. I longed to, but I knew it was impossible. And yet I often tried. I turned on all the lights, I took a good look all round, I began to play with what I saw.'
            comp='<Form/>, <Input />, <TextArea />, <Label />, <InnerLabel />' />
          <BCS>
          <B.Form
            name={'signup'}
            submitForm={this.submit}>
            <B.FormRequiredInput
              className='mt-8'
              prop-size='md'
              prop-format='innerLabel'
              name='firstName'
              placeholder='Jimmy'
              autocomplete='off'>
              <B.InnerLabel>{'First Name'}</B.InnerLabel>
            </B.FormRequiredInput>

            <B.FormRequiredInput
              className='mt-8'
              prop-size='md'
              prop-format='innerLabel'
              name='lastName'
              placeholder='Young'
              autocomplete='off'>
              <B.InnerLabel>{'Last Name'}</B.InnerLabel>
            </B.FormRequiredInput>

            <B.FormRequiredInput
              className='mt-8'
              prop-size='md'
              prop-format='innerLabel'
              name='email'
              placeholder='jimmy@tlon.io'
              autocomplete='off'>
              <B.InnerLabel>{'Email'}</B.InnerLabel>
            </B.FormInput>

            <B.FormSubmit className='mt-8' prop-size='lg wide'>
              Sign Up
            </B.FormSubmit>

          </B.Form>

          </BCS>




        </B.RowCol>
      </B.Container>
    )
  }
}

ReactDOM.render(<WelcomePage />, document.querySelectorAll("#root")[0]);
