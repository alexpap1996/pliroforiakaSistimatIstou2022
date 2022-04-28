import "../styles/article.css";
import { motion } from "framer-motion";

const Article = (state) => {
  const {
    title,
    body,
    imgUrl,
    authorId,
    dateCreated,
    articleId,
    articleDescription,
  } = state.pageData;
  return (
    <>
      <div className="article-body ">
        <header
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="my-5">{title}</h1>
        </header>
        <main>
          <p>{body}</p>
          {/* placeholder text*/}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi
            tellus, fermentum vitae nisl ac, consequat semper ipsum. Ut neque
            quam, sollicitudin et pellentesque a, ultricies et orci. Aliquam
            lectus arcu, ornare eu nisi sit amet, cursus semper lacus. Phasellus
            leo metus, vehicula eu volutpat in, maximus malesuada elit. Etiam
            vitae fringilla nisl, a laoreet augue. Nullam at turpis nec libero
            dictum sodales vitae quis dui. Morbi tincidunt nunc quis gravida
            volutpat. Nam pretium vestibulum gravida. Quisque pharetra nulla ac
            augue sagittis, ut rhoncus neque suscipit. In nisl eros, euismod eu
            enim porta, molestie sagittis sem. Donec euismod, sapien eu pretium
            tristique, ligula magna malesuada mauris, a consequat dui orci
            elementum risus. Ut tincidunt fermentum arcu, eu finibus metus
            ornare et. Donec interdum, nisi at fermentum porta, leo est viverra
            enim, in mattis est eros sed tellus. Etiam enim dolor, volutpat id
            metus eget, pellentesque laoreet nunc. Curabitur accumsan nisi enim,
            in fermentum tellus dictum et.
          </p>
          <p>
            Mauris pulvinar ipsum vitae felis facilisis fermentum. Vestibulum
            sed semper elit. Ut varius, nisi ut laoreet feugiat, augue mauris
            placerat augue, ac aliquam leo odio et augue. Integer pellentesque
            consequat metus, sit amet accumsan metus mollis luctus. Ut id justo
            nec sapien pharetra tincidunt sit amet fermentum ligula. Cras cursus
            luctus justo eget consectetur. Curabitur condimentum mauris orci,
            eget imperdiet justo elementum sit amet.
          </p>
          <p>
            Donec maximus metus dignissim, ullamcorper mauris sed, placerat
            arcu. Morbi aliquam mollis ligula sit amet scelerisque. Suspendisse
            ac nulla et purus gravida aliquam sit amet ac sem. Nam blandit dui
            quis tellus dignissim commodo non id purus. In commodo tempor sem id
            lacinia. Vivamus a tellus molestie, elementum ligula eget, fermentum
            est. Maecenas faucibus, nisl sed venenatis posuere, purus magna
            suscipit est, nec consequat diam nulla ac est. In at nisl a augue
            volutpat blandit. Praesent quis justo vitae est feugiat tempor sed
            feugiat dui. Donec pretium ante ut tempor venenatis. Nam lobortis,
            turpis sed scelerisque bibendum, quam urna semper eros, id
            scelerisque libero libero auctor lorem. Phasellus scelerisque tortor
            diam, vitae pretium velit faucibus quis. Suspendisse non leo in
            risus lobortis eleifend. Curabitur commodo elit in neque vestibulum
            interdum. Etiam pharetra lacinia nunc, ac feugiat ligula.
          </p>
        </main>
      </div>
      <div className="container mb-5">
      <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
        >
          Επιστροφή στα Άρθρα
        </motion.button>
        <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn mx-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
        >
          Πηγή
        </motion.button>
        <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn right"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
        >
          Like
        </motion.button>
      </div>
    </>
  );
};

export default Article;
