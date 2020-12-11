<template>
  <div class="contact-item">
    <div>
      <p>
        id: <teste> {{ contact.pessoaFisicaId }} </teste> 
      </p>
    </div>
    <div style="margin-left:10px;">
        <p>
          nome: <teste> {{ contact.nome }} </teste>
        </p>
    </div>
    <div>
        <button
          @click="deleteContact(contact.pessoaFisicaId)">x</button>
        <button
          @click="isToEdit = true">Edit</button>
    </div>
  
    <div v-if="isToEdit" style="margin-left: 20px ;
      justify-self: flex-end;
      align-self: center;">
      <p>
        <input type="text" v-model="newName" name="name" placeholder="Novo nome do contato..." />
        <input type="submit" value="Alterar" @click="editContact()" />
      </p>
    </div>
  </div>
</template>

<script>
import EventBus from '../plugins/eventBus'

export default {
  props: ["contact"],
  data(){
    return {
      isToEdit: false,
      newName: ""
    }
  },
  methods:{
    deleteContact(id){
      EventBus.$emit('del-contact', id)
    },
    editContact(){
      EventBus.$emit('update-contact', {id: this.contact._id, params: {nome: this.newName}})
      this.isToEdit = false
    }
  }
};
</script>

<style scoped>
.contact-item {
  color: gray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
  padding: 10px;
  margin: 10px;

}
.buttons{
      margin-left: 20px ;
      justify-self: flex-end;
      align-self: center;

}
teste {
color: blue;
}

</style>