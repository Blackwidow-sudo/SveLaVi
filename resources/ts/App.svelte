<script lang="ts">
    import Counter from "./components/Counter.svelte";

    interface User {
        name: string;
        age: number;
    }

    let user: User = {
        name: "John Doe",
        age: 27,
    };
</script>

<div>
    <div>
        <p>Username: {user.name}</p>
        <p>Userage: {user.age}</p>
    </div>
    <div>
        <label for="name">Enter name:</label>
        <input type="text" bind:value={user.name} name="name" id="name" />
    </div>
    <div>
        <label for="age">Enter age:</label>
        <input type="number" bind:value={user.age} name="age" id="age" />
    </div>

    <Counter />
</div>
