new Vue({
    el:'#app',
    data:{
        title:'Vue Intro',
        name: 'Goku',
        url: 'https:/github.com/nilldiggonto',
        classes:['btn','btn-success','btn-sm'],
        mailed: 'type@mail.com',
        volumed: 0,
        balance: 5,
        gokusposition:{
            x:0,
            y:0,
        },
        todo:'Machine Learning',
        showMagic:false,
        showSecond:true,
        items: ['ok','notok','here','there'],
        my_data: [
            {'movie':'tim','rating':5},
            {'movie':'mia','rating':5},
            {'movie':'tia','rating':5},
            {'movie':'rin','rating':5},

        ]
        },
        
    methods:{
        task(){
            return `Well! I am ${this.name}`
        },
        morning(time){
            return `It's ${time}.`
        },
        addBalance(amount){
            this.balance += amount
        },
        logInfo(e){
            this.gokusposition.x = e.offsetX
            this.gokusposition.y = e.offsetY
        },
        updateName(e){
            this.todo = e.target.value
        },
        myMsg(){
            console.log('print my message')
        },
        magicShow(){
            this.showMagic = !this.showMagic
        },
        noShow(){
            this.showSecond = !this.showSecond
        }

    }
})