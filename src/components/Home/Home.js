import React, {Component} from 'react'
import API from '../../utils/api';
import Heros from '../Heros';
import Abilities from '../Abilities';
import api from '../../utils/api';


export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            heros: null,
            abilities: null,
            background: null,
            BGCOUNT: -1,
            profile: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAbilities = this.handleAbilities.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target 
        this.setState(() => {
            return {
                [name]: value
            }
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        API.getHeroes().then(data =>{
            this.setState(() => {
                return {
                    heros: data
                }
            });
        });
        
        
    
        
    }; 
    handleAbilities(e){
        e.preventDefault()

        API.getAbilities()
            .then(data => {
                this.setState(() => {
                    return {
                        abilities: data
                    }
                })
            })
    }

    handleBG = async () => {
        const tempURL =  await api.getHeroes();
        const tempBGs = tempURL.map(h => h.background_url)
        this.setState(() => { return {background: tempBGs}});
        console.log(this.state.background);
        // this.setState((prevState) => {
        //     return {
        //         BGCOUNT: prevState.BGCOUNT + 1
        //     }
        // })

        // if(this.state.background[this.state.BGCOUNT]) {
        //     console.log(this.state.background[this.state.BGCOUNT]); 
        // }
    }
    render() {
        
        let { heros, abilities, background } = this.state;
        console.log("before ", heros)
        
        return (
            <div>
                <button type="button" onClick={this.handleSubmit}>Test</button>
                {heros && <Heros heros={heros} />}
                <button type="button" onClick={this.handleAbilities}>Abilities</button>
                {abilities && <Abilities abilities={abilities} />}
                <img src="/assets/Ana/AnaLogo.png" alt="Ana" />
                <div>
                    {background && background.map( (bg, i) => {return (
                        <div style={{"float": "left"}} key={i}>
                            <div>{i}</div>
                            <video muted="muted" autoPlay height="500px" width="500px"> 
                                <source src={bg} type="video/webm"/>
                            </video>
                        </div>
                        )})}
                    <button style={{"width": "100px", "height": "100px"}} onClick={this.handleBG}>BG</button>

                </div>
            </div>
        );
    }
}