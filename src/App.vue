<template>
  <div id="app">
    <main class="container">
      <h1>Dzangolab - Vue Attributes</h1>

      <p>Dual-mode attributes for vue.js.</p>

      <section>
        <div class="content">
          <div class="show">
            <h2>Show</h2>

            <StringAttribute
              v-model="profile.name"
              label="Name"
            />
            <NumberAttribute
              v-model="profile.age"
              label="Age"
            />
            <MultilineTextAttribute
              v-model="profile.bio"
              label="Biography"
            />
          </div>
          <div class="edit">
            <h2>Edit</h2>
            <form>
              <StringAttribute
                v-model="profile.name"
                :edit="true"
                label="Name"
              />
              <NumberAttribute
                v-model="profile.age"
                :edit="true"
                label="Age"
              />
              <MultilineTextAttribute
                v-model="profile.bio"
                :edit="true"
                label="Biography"
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import {
  MultilineTextAttribute,
  NumberAttribute,
  StringAttribute
} from '../lib/'
import '../lib/assets/attributes.scss'

export default {

  name: 'App',

  components: {
    MultilineTextAttribute,
    NumberAttribute,
    StringAttribute
  },

  data () {
    return {
      profile: {
        age: "45",
        bio: "Consectetur mi ullamcorper a ultricies vestibulum a adipiscing quam amet ullamcorper aliquam ultrices suspendisse consectetur condimentum ad consequat varius in cubilia per a dapibus amet habitant urna sagittis nascetur.",
        name: "John Smith",
      }
    }
  }
}
</script>
