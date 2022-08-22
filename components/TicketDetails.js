app.component('ticket-details', {
    props: {
        name: String,
        description: String,
        tickets: Number
    },
    template: `
        <div>
            <h4>{{name}}</h4>
            <p>{{description}}</p>
            <select v-model='ticketsToBuy'>
                <option value='0'>0</option>
                <option v-for='number in ticketsLeft' :value='number'>{{number}}</option>
            </select>
            <button v-if='ticketsToBuy > 0' @click='addTickets(ticketsToBuy)'>Adds tickets</button>
        </div>
    `,
    data() {
        return {
            ticketsToBuy: 0,
            ticketsLeft: this.tickets
        }
    },
    methods: {
        addTickets(num) {
            this.ticketsLeft = this.ticketsLeft - num
            this.ticketsToBuy = 0
            this.$emit('buyTickets', this.ticketsToBuy, this.name)
        }
    }
})

