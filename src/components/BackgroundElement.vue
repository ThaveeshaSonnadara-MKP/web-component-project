<template>
    <section class="text-style">
        <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
            type="module"></script>
        <div>
            <!-- :style="CSSVariables" -->
            <div class="flex-start" :style="{ 'background-color': bgcolor }">
                <dotlottie-player @click="iconClicked"
                    src="https://lottie.host/2e3dd6ce-3a2e-41aa-b202-58c0387499f6/Qf8L1lhHjz.lottie"
                    background="transparent" speed="1" style="width: 50px; height: 50px; cursor: pointer;" loop
                    autoplay></dotlottie-player>
                <h1 class="no-selection" :style="{ 'color': titletextcolor }">{{ title.toUpperCase() }}</h1>
            </div>

            <div class="msg-box" :style="{ 'border-width': bgborderwidth + 'px', 'border-color': bgbordercolor }">
                <div class="emoji" v-if="emojiname == 'bear'">🐻</div>
                <div class="emoji" v-if="emojiname == 'fox'">🦊</div>
                <div class="emoji" v-if="emojiname == 'bird'">🐥</div>
                <div class="emoji" v-if="emojiname == 'unicorn'">🦄</div>

                <p :style="{ 'color': msgtextcolor }">
                    {{ msg }}</p>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: "background-element",
    props: {
        bgcolor: {
            type: String,
            default: "rgb(220, 205, 235)",
        },
        titletextcolor: {
            type: String,
            default: "black",
        },
        msgtextcolor: {
            type: String,
            default: "black",
        },
        bgborderwidth: {
            type: Number,
            default: 0,
        },
        bgbordercolor: {
            type: String,
            default: "#CF7C1B",
        },
        msg: {
            type: String,
            required: true,
            default: "Welcome to MKP Dev's Custom Widget! 🙌🧿",
        },
        title: {
            type: String,
            default: "A Component By MKP Dev Team.",
        },
        emojiname: {
            type: String,
            default: "bear",
            validate: true,
            validator: function (value) {
                return ["bear", "fox", "bird", "unicorn"].includes(value);
            }
        },
    },
    methods: {
        iconClicked() {
            location.reload();
        }
    },
};
</script>

<style scoped>
.flex-start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    width: 100%;
}

.msg-box {
    margin: 10px;
    gap: 10px;
    padding: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-style: solid;
}

.text-style {
    font-family: Arial, sans-serif;
}

.no-selection {
    cursor: default;
    -webkit-user-select: none;
    /* Safari */
    user-select: none;
}

.emoji {
    cursor: pointer;
    user-select: auto;
    font-size: 2rem;
}
</style>
