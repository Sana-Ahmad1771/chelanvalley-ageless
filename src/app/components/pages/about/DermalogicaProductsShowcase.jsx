"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function DermalogicaSection() {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        <div className="flex gap-1">
          <span className="text-secondary">
            {" "}
            <GoDotFill size={15} />
          </span>
          <p className="uppercase flex items-center gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-secondary/90">
            Partners
          </p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight text-neutral mb-3"
        >
          Our Trusted Partner – Dermalogica
        </motion.h2>

        <p className="max-w-3xl mb-12 text-neutral/80 text-lg leading-relaxed  ">
          We proudly use{" "}
          <span className="font-semibold text-secondary">Dermalogica </span>
          products — proven, clean, and cruelty-free formulations that enhance
          your skin’s health while being gentle and safe for all types.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <Image
                src={`/images/product-${i}.jpg`}
                alt="Dermalogica Product"
                width={400}
                height={300}
                className="rounded-xl object-cover mb-5"
              />
              <h4 className="text-xl font-semibold text-primary mb-2">
                Dermalogica Product {i}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scientifically formulated, clean beauty essentials that restore
                your skin’s natural balance.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
