<template>
  <div>
    <form @submit="addContact">
      <input type="text" v-model="nome" name="nome" placeholder="Nome do contato..." />
      <input type="text" v-model="cpf" name="cpf" placeholder="CPF do contato..." />
      <input type="submit" value="Adicionar" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      cpf: ""
    };
  },
  methods: {
    addContact(e) {
      e.preventDefault();
      const newContact = {
        nome: this.nome,
        cpf: this.cpf
      };
      this.$emit("add-contact", newContact);
      this.nome = "";
      this.cpf = ""
    }
  }
};
</script>
 
<style/>