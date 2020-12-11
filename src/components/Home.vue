<template>
  <div>
    
    <AddContact v-on:add-contact="addContact" />
    <div class="users-container">  
      <Contacts
        v-bind:contacts="contacts"
        @:del-contact="deleteContact"
        @:update-contact="updateContact"
      />
    </div>

  </div>
</template>

<script>
import Contacts from "../components/Contacts";
import AddContact from "../components/AddContact";
import UpdateContact from "../components/UpdateContact";
import EventBus from '../plugins/eventBus'
import axios from "axios";

export default {
  components: {
    AddContact,
    UpdateContact,
    Contacts
  },
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    deleteContact(id) {
      console.log(id)
      axios
        .delete("http://localhost:3000/contacts/" + id)
        .then(
            (this.contacts = this.contacts.filter(
              contact => contact.pessoaFisicaId !== id
            )) 
        )
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    },
    addContact(newContact) {
      const { nome, cpf } = newContact;
      axios
        .post("http://localhost:3000/contacts/", {
          nome,
          cpf
        })
        .then(res => (this.contacts = [...this.contacts, res]))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    },
    updateContact(contact) {
      const { id, params } = contact;
      axios
        .put("http://localhost:3000/contacts/cliente/" + id, {
          nome: params.nome
        })
        .then(
          (this.listContact())
        )
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    },
    listContact(){
      axios
      .get("http://localhost:3000/contacts/")
      .then(res => (this.contacts = res.data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
    }
  },
  created() {
    this.listContact()
    EventBus.$on('del-contact', this.deleteContact)
    EventBus.$on('update-contact', this.updateContact)
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.users-container {
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
}
</style>
